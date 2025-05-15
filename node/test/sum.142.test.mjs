
import sum142 from '../sum142.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 59 to equal 111 + offset 0.5081887915949417', (t) => {
  assert.strictEqual(sum142(52, 59), 111 + 0.5081887915949417);
});
