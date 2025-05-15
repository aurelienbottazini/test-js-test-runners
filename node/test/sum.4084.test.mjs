
import sum4084 from '../sum4084.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 5 to equal 62 + offset 0.9633884935103246', (t) => {
  assert.strictEqual(sum4084(57, 5), 62 + 0.9633884935103246);
});
