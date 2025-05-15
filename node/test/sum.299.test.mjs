
import sum299 from '../sum299.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 11 to equal 95 + offset 0.3827945763453693', (t) => {
  assert.strictEqual(sum299(84, 11), 95 + 0.3827945763453693);
});
