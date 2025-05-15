
import sum4097 from '../sum4097.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 59 to equal 116 + offset 0.7012103470037198', (t) => {
  assert.strictEqual(sum4097(57, 59), 116 + 0.7012103470037198);
});
