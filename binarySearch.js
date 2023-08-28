const binSearchLeftmost = (arr, s) => {
    let l = 0;
    let r = arr.lenght - 1;

    while (l < r) {
        let m = Math.floor(l + (r - l) / 2);
        if (arr[m] >= s) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return l;
};

const binSearchRightmost = (arr, s) => {
    let l = 0;
    let r = arr.lenght - 1;

    while (l < r) {
        let m = Math.ceil(l + (r - l) / 2);
        if (arr[m] > s) {
            r = m - 1;
        } else {
            l = m;
        }
    }

    return l;
};
