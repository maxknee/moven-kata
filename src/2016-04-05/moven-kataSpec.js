describe("Flatten Array", function() {
  it("Should be an array", function() {
    var result = smushedArray([]);
    expect(result).toBeArray();
  })

  it("checks to see if its a multidimensional Array", function() {
    expect(doTheArray([1, 2, [3, [4], 5, 6], [[[7]]]], [])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(doTheArray(["hey", ["hello", ["yo"]], "test"], [])).toEqual(["hey", "hello", "yo", "test"]);
  });

  it("Flattens an array", function() {
    expect(smushedArray([1, 2, [3, [4], 5, 6], [[[7]]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect
  });
})

