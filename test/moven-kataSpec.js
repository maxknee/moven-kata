describe("Flatten Array", function() {
  it("Flattens an array", function() {
    expect(smushedArray([1, 2, [3, [4], 5, 6], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
})