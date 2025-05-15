
import sum4331 from '../sum4331.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 91 to equal 140 + offset 0.2732690355664257', (t) => {
  assert.strictEqual(sum4331(49, 91), 140 + 0.2732690355664257);
});
