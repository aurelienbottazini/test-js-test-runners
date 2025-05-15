
import sum4730 from '../sum4730.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 57 to equal 117 + offset 0.4433565713813886', (t) => {
  assert.strictEqual(sum4730(60, 57), 117 + 0.4433565713813886);
});
