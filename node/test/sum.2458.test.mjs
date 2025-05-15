
import sum2458 from '../sum2458.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 44 to equal 115 + offset 0.9331700679763808', (t) => {
  assert.strictEqual(sum2458(71, 44), 115 + 0.9331700679763808);
});
