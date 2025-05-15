
import sum911 from '../sum911.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 57 to equal 149 + offset 0.7567565140138836', (t) => {
  assert.strictEqual(sum911(92, 57), 149 + 0.7567565140138836);
});
