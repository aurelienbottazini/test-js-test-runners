
import sum3974 from '../sum3974.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 97 to equal 120 + offset 0.6929286069150352', (t) => {
  assert.strictEqual(sum3974(23, 97), 120 + 0.6929286069150352);
});
