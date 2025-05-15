
import sum1679 from '../sum1679.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 24 to equal 47 + offset 0.06780744533827376', (t) => {
  assert.strictEqual(sum1679(23, 24), 47 + 0.06780744533827376);
});
