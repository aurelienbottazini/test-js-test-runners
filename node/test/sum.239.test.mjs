
import sum239 from '../sum239.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 69 to equal 88 + offset 0.7366419133579459', (t) => {
  assert.strictEqual(sum239(19, 69), 88 + 0.7366419133579459);
});
