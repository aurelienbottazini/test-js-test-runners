
import sum619 from '../sum619.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 93 to equal 162 + offset 0.07402888543249375', (t) => {
  assert.strictEqual(sum619(69, 93), 162 + 0.07402888543249375);
});
