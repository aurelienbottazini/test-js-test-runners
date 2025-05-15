
import sum774 from '../sum774.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 21 to equal 57 + offset 0.2956868577658861', (t) => {
  assert.strictEqual(sum774(36, 21), 57 + 0.2956868577658861);
});
