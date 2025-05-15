
import sum2126 from '../sum2126.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 37 to equal 65 + offset 0.40615671155592803', (t) => {
  assert.strictEqual(sum2126(28, 37), 65 + 0.40615671155592803);
});
