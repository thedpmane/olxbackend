class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const q = this.queryStr.q
      ? {
        name: {
          $regex: this.queryStr.q,
          $options: "i",
        },
      }
      : {};

    this.query = this.query.find({ ...q });
    return this;
  }


  filter() {
    const queryCopy = { ...this.queryStr }
    // before delete consoling querycopy
    // console.log(queryCopy)
    //remove some field for category
    const removeField = ["q", "page", "limit"];

    removeField.forEach(key => delete queryCopy[key])
    // after delete consoling querycopy
    //console.log(queryCopy)

    // filter for price and rating
    let queryStr = JSON.stringify(queryCopy)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);


    this.query = this.query.find(JSON.parse(queryStr))
    return this

  }

  pagination() {
    const currentPage = Number(this.queryStr.page) || 1;
    const perPageLimit = Number(this.queryStr.limit)
    const skip = perPageLimit * (currentPage - 1);

    this.query = this.query.limit(perPageLimit).skip(skip);
    return this
  }
}

module.exports = ApiFeatures;