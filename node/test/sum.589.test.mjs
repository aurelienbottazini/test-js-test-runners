
import sum589 from '../sum589.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 21 to equal 62 + offset 0.19903557004469408', (t) => {
  assert.strictEqual(sum589(41, 21), 62 + 0.19903557004469408);
});
