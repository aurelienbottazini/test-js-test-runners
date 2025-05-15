
import sum648 from '../sum648.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 89 to equal 92 + offset 0.7121167614314909', (t) => {
  assert.strictEqual(sum648(3, 89), 92 + 0.7121167614314909);
});
