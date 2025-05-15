
import sum4108 from '../sum4108.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 14 to equal 40 + offset 0.964248369616207', (t) => {
  assert.strictEqual(sum4108(26, 14), 40 + 0.964248369616207);
});
