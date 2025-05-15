
import sum2459 from '../sum2459.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 66 to equal 70 + offset 0.7034950360163406', (t) => {
  assert.strictEqual(sum2459(4, 66), 70 + 0.7034950360163406);
});
