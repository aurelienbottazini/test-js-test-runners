
import sum3516 from '../sum3516.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 75 to equal 168 + offset 0.6820476651621082', (t) => {
  assert.strictEqual(sum3516(93, 75), 168 + 0.6820476651621082);
});
