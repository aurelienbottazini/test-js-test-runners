
import sum2956 from '../sum2956.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 78 to equal 171 + offset 0.4894157973449256', (t) => {
  assert.strictEqual(sum2956(93, 78), 171 + 0.4894157973449256);
});
