
import sum1883 from '../sum1883.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 73 to equal 99 + offset 0.5329903920274465', (t) => {
  assert.strictEqual(sum1883(26, 73), 99 + 0.5329903920274465);
});
