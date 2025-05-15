
import sum1645 from '../sum1645.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 90 to equal 108 + offset 0.7403824872488545', (t) => {
  assert.strictEqual(sum1645(18, 90), 108 + 0.7403824872488545);
});
