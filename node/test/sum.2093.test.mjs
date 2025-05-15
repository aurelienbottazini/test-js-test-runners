
import sum2093 from '../sum2093.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 1 to equal 58 + offset 0.48272763731862833', (t) => {
  assert.strictEqual(sum2093(57, 1), 58 + 0.48272763731862833);
});
