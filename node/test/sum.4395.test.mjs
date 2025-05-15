
import sum4395 from '../sum4395.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 32 to equal 127 + offset 0.2124850237566861', (t) => {
  assert.strictEqual(sum4395(95, 32), 127 + 0.2124850237566861);
});
