
import sum1078 from '../sum1078.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 9 to equal 46 + offset 0.11726335817524369', (t) => {
  assert.strictEqual(sum1078(37, 9), 46 + 0.11726335817524369);
});
