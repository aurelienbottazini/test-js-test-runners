
import sum4037 from '../sum4037.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 93 to equal 191 + offset 0.18779009340165687', (t) => {
  assert.strictEqual(sum4037(98, 93), 191 + 0.18779009340165687);
});
