
import sum2020 from '../sum2020.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 23 to equal 59 + offset 0.10971361119916423', (t) => {
  assert.strictEqual(sum2020(36, 23), 59 + 0.10971361119916423);
});
