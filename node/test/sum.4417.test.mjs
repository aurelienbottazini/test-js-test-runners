
import sum4417 from '../sum4417.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 59 to equal 127 + offset 0.06186630164454621', (t) => {
  assert.strictEqual(sum4417(68, 59), 127 + 0.06186630164454621);
});
