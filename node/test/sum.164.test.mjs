
import sum164 from '../sum164.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 18 to equal 86 + offset 0.6209510568666351', (t) => {
  assert.strictEqual(sum164(68, 18), 86 + 0.6209510568666351);
});
