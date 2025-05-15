
import sum4161 from '../sum4161.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 14 to equal 78 + offset 0.1424709138340754', (t) => {
  assert.strictEqual(sum4161(64, 14), 78 + 0.1424709138340754);
});
