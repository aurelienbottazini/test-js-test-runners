
import sum4788 from '../sum4788.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 79 to equal 129 + offset 0.5542511649224267', (t) => {
  assert.strictEqual(sum4788(50, 79), 129 + 0.5542511649224267);
});
