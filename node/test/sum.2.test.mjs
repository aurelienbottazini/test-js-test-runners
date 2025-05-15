
import sum2 from '../sum2.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 82 to equal 170 + offset 0.779072040874667', (t) => {
  assert.strictEqual(sum2(88, 82), 170 + 0.779072040874667);
});
