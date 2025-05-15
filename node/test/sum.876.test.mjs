
import sum876 from '../sum876.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 17 to equal 102 + offset 0.38834435679313695', (t) => {
  assert.strictEqual(sum876(85, 17), 102 + 0.38834435679313695);
});
