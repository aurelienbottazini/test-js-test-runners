
import sum4025 from '../sum4025.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 85 to equal 182 + offset 0.4841231526786096', (t) => {
  assert.strictEqual(sum4025(97, 85), 182 + 0.4841231526786096);
});
