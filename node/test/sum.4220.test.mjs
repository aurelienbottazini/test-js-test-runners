
import sum4220 from '../sum4220.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 23 to equal 47 + offset 0.4718072991319896', (t) => {
  assert.strictEqual(sum4220(24, 23), 47 + 0.4718072991319896);
});
