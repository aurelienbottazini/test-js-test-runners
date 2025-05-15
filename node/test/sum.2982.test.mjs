
import sum2982 from '../sum2982.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 94 to equal 161 + offset 0.8185027300939309', (t) => {
  assert.strictEqual(sum2982(67, 94), 161 + 0.8185027300939309);
});
