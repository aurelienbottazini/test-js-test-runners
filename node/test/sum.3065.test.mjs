
import sum3065 from '../sum3065.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 79 to equal 135 + offset 0.18566995354851856', (t) => {
  assert.strictEqual(sum3065(56, 79), 135 + 0.18566995354851856);
});
