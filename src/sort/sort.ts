function selectSort<T>(input: Array<T>) {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        [input[j], input[i]] = [input[i], input[j]];
      }
    }
  }
  return input;
}

function bubbleSort<T>(input: Array<T>) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[j] > input[j + 1]) {
        [input[j + 1], input[j]] = [input[j], input[j + 1]];
      }
    }
  }
  return input;
}

function quickSort<T>(input: Array<T>) {
  function getIndex(low: number, high: number) {
    let base = input[low];
    while (low < high) {
      while (input[high] > base && low < high) {
        high--;
      }
      input[low] = input[high];

      while (input[low] <= base && low < high) {
        low++;
      }
      input[high] = input[low];
    }
    input[low] = base;
    return low;
  }
  function main(low: number, high: number) {
    let index = getIndex(low, high);
    if (index - 1 > low) {
      main(low, index);
    }
    if (index + 1 < high) {
      main(index + 1, high);
    }
    return input;
  }
  return main(0, input.length - 1);
}

function insertOrder<T>(input: Array<T>) {
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0; j--) {
      if (input[j] < input[j - 1]) {
        [input[j], input[j - 1]] = [input[j - 1], input[j]];
      } else {
        break;
      }
    }
  }
  return input;
}

function hillSort<T>(input: Array<T>, step: number) {
  let group = Math.floor(input.length / step);
  let tail = input.length % step;
  for (let i = 0; i < group; i++) {
    for (let j = i + step - 1; j < input.length; j += step - 1) {
      for (let k = j; k - step + 1 > 0; k -= step - 3) {
        if (input[k] < input[k - step + 1]) {
          [input[k], input[k - step + 1]] = [input[k - step + 1], input[k]];
        } else {
          break;
        }
      }
    }
  }
  if (tail) {
    for (let i = input.length - tail + 1; i < input.length; i++) {
      for (let j = i; j > input.length - tail; j--) {
        if (input[j] < input[j - 1]) {
          [input[j], input[j - 1]] = [input[j - 1], input[j]];
        } else {
          break;
        }
      }
    }
  }
  if (group === 0) return input;
  hillSort(input, step * 2);
  return input;
}

function multipleOrder<T>(input: Array<T>) {
  let group: Array<Array<T>> = [];
  input.forEach((item) => {
    group.push([item]);
  });
  function main(group: Array<Array<T>>): Array<T> {
    let result: Array<Array<T>> = [];
    if (group.length <= 1) return group[0];
    for (let i = 0; i < group.length; i += 2) {
      let g1 = group[i];
      let g2 = group[i + 1];
      let _group = [];
      if (!g2 && g1) {
        result.push(g1);
        break;
      }
      while (true) {
        let g1Head = g1[0];
        let g2Head = g2[0];
        if (g1Head && g2Head) {
          if (g1Head < g2Head) {
            _group.push(g1.shift());
          } else {
            _group.push(g2.shift());
          }
        } else if (!g1Head && g2Head) {
          _group.push(g2.shift());
        } else if (g1Head && !g2Head) {
          _group.push(g1.shift());
        } else {
          break;
        }
      }
      result.push(_group);
    }
    return main(result);
  }
  return main(group);
}

function stackSort<T>(input: Array<T>) {
  function heapify(input: Array<T>) {
    for (let i = input.length - 1; i > 0; i -= 2) {
      let parent = Math.ceil((i - 2) / 2);
      let leftChild = 2 * parent + 1;
      let rightChild = 2 * parent + 2;
      if (input[leftChild] && input[leftChild] < input[parent]) {
        [input[leftChild], input[parent]] = [input[parent], input[leftChild]];
      }
      if (input[rightChild] && input[rightChild] < input[parent]) {
        [input[rightChild], input[parent]] = [input[parent], input[rightChild]];
      }
    }
    return input;
  }
  let heap = input.map((item) => item);
  let result: Array<T> = [];
  while (true) {
    heap = heapify(heap);
    if (heap.length <= 0) {
      return result;
    } else {
      result.push(heap.shift());
    }
  }
}

type Sort = { [prop: string]: Function };
const sort: Sort = {
  selectSort,
  bubbleSort,
  quickSort,
  insertOrder,
  hillSort,
  multipleOrder,
  stackSort,
};
export default sort;
