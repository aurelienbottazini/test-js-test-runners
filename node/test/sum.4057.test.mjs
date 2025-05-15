
import sum4057 from '../sum4057.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 61 to equal 111 + offset 0.8041540177935912', (t) => {
  assert.strictEqual(sum4057(50, 61), 111 + 0.8041540177935912);
});
