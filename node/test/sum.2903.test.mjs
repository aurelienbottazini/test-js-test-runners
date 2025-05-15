
import sum2903 from '../sum2903.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 36 to equal 65 + offset 0.9857174059887193', (t) => {
  assert.strictEqual(sum2903(29, 36), 65 + 0.9857174059887193);
});
