
import sum4311 from '../sum4311.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 94 to equal 125 + offset 0.2668987399455375', (t) => {
  assert.strictEqual(sum4311(31, 94), 125 + 0.2668987399455375);
});
