
import sum2226 from '../sum2226.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 0 to equal 93 + offset 0.9836256604143776', (t) => {
  assert.strictEqual(sum2226(93, 0), 93 + 0.9836256604143776);
});
