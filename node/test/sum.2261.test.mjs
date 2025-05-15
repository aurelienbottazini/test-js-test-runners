
import sum2261 from '../sum2261.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 14 to equal 53 + offset 0.8494323013295764', (t) => {
  assert.strictEqual(sum2261(39, 14), 53 + 0.8494323013295764);
});
