
import sum843 from '../sum843.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 42 to equal 52 + offset 0.6375168350623179', (t) => {
  assert.strictEqual(sum843(10, 42), 52 + 0.6375168350623179);
});
