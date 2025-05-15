
import sum1490 from '../sum1490.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 17 to equal 43 + offset 0.27127124938421854', (t) => {
  assert.strictEqual(sum1490(26, 17), 43 + 0.27127124938421854);
});
