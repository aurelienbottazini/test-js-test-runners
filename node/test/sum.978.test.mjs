
import sum978 from '../sum978.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 90 to equal 160 + offset 0.5054269819924979', (t) => {
  assert.strictEqual(sum978(70, 90), 160 + 0.5054269819924979);
});
