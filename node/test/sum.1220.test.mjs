
import sum1220 from '../sum1220.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 82 to equal 161 + offset 0.43390494187661877', (t) => {
  assert.strictEqual(sum1220(79, 82), 161 + 0.43390494187661877);
});
