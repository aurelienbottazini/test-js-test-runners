
import sum42 from '../sum42.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 90 to equal 101 + offset 0.6550985962492402', (t) => {
  assert.strictEqual(sum42(11, 90), 101 + 0.6550985962492402);
});
