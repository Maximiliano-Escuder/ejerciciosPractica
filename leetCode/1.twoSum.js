const nums = [2, 7, 11, 15]
const target = 9

const nums2 = [3,2,4]
const target2 = 6

const nums3 = [3, 3]
const target3 = 6

function twoSum(nums, target) {
    if (nums.length >= 2 && nums.length <= 10**4) {
        if (target >= (-10)**9 && target <= 10**9) {
            let mapNumbers = new Map()
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] >= (-10)**9 && nums[i] <= 10**9) {
                    let difference = target - nums[i]
                    if (mapNumbers.has(difference)) {
                        return [mapNumbers.get(difference), i]
                    } else if (!mapNumbers.has(nums[i])) {
                        mapNumbers.set(nums[i], i)
                    }
                } else {
                    return 'Invalid num'
                }
            };
        } else {
            return 'Invalid target'
        }
    } else {
        return 'Invalid length'
    }
}

let search = twoSum(nums, target)
console.log(search)

let search2 = twoSum(nums2, target2)
console.log(search2)

let search3 = twoSum(nums3, target3)
console.log(search3)